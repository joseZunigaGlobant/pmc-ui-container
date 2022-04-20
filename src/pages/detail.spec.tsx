import setup from 'utils/test/setup'
import server from 'mocks/config'

import { coinDetail, coinDetailErr } from 'mocks/rest/coingecko'
import Detail from './detail'

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

afterEach(() => {
  server.resetHandlers()
})

let mockReference: any

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')
  const mocked = {
    useParams: jest.fn().mockReturnValue({ params: {} })
  }

  mockReference = mocked

  const mockModule = {
    __esModule: true,
    ...originalModule,
    useParams: mocked.useParams
  }

  return mockModule
})

describe('Detail', () => {
  it('should render a skeleton, then error', async () => {
    server.use(coinDetailErr)

    const { findByText } = setup(Detail, {})

    const err = await findByText('An error has ocurred :(')
    expect(err).toBeInTheDocument()
  })

  it('should render a skeleton, then render the table', async () => {
    server.use(coinDetail)
    mockReference.useParams.mockReturnValue({ id: 'bitcoin' })

    const { findByText, asFragment } = setup(Detail, {})

    expect(mockReference.useParams).toBeCalled()

    const skeleton = asFragment().querySelector('.chakra-skeleton')
    expect(skeleton).toBeInstanceOf(HTMLDivElement)

    const muiGrid = await findByText('Bitcoin')
    expect(muiGrid).toBeInTheDocument()
  })
})
