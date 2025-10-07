import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = (props) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Discover a variety of delicious dishes crafted to satisfy every palate. From appetizers to desserts, our menu offers something for everyone.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => props.setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className='explore-menu-list-item' key={index}>
              <img className={props.category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />

    </div>
  )
}

export default ExploreMenu
