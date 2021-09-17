import React from 'react'

const SideBrand = () => {
  return (
    <div className={styles.wrap}>
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
