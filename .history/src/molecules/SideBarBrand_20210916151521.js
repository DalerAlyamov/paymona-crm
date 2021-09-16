import React from 'react'

const SideBarBrand = ({
  text
}) => {
  return (
    <div className={styles.wrap}>
      <Icons
        icon={<Logo size={32}/>}
        clasName={styles.titleSideBar}
        rotate={false}
        active={false}
      />
      <span>
        {text}
      </span>
    </div>
  )
}

export default SideBarBrand
