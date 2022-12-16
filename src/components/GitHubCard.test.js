import renderer from 'react-test-renderer'
import GitHubCard from './GitHubCard.js'

test('renders a snapshot', () => {
    const tree = renderer.create(<GitHubCard/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
