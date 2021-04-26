import * as React from 'react'
import TwitterIcon from '../../Icons/Twitter.svg'

function SideBar() {
  return (
    <div>
      sidebar{' '}
      <TwitterIcon
        {...({ width: '24px', height: '24px', fill: 'red' } as any)}
      />
    </div>
  )
}

export { SideBar }
