import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Duran',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo Heraldo',
    isFollowing: false
  },
  {
    userName: 'vxnder',
    name: 'Vanderhart',
    isFollowing: false
  }
]

export function App () {
  return (
    <div className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
        ))
      }
    </div>
  )
}