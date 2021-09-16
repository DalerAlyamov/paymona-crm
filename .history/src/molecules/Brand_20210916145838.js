import React from 'react'

const Brand = () => {
  return (
    <div className>
      <Icons
        icon={<Logo size={32}/>}
        clasName={styles.titleSideBar}
        rotate={false}
        active={false}
      />
    </div>
  )
}

export default Brand
