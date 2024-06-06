export default function Page() {
    return <p>Customers Page</p>;
  }


//'use client'
// working code without search bar.
// import { useState, useEffect } from 'react'
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Menu } from 'antd';
// type MenuItem = Required<MenuProps>['items'][number];
// type TItem = {
//   name: string,
//   email: string,
//   id: number,
// }

// const menubar: React.FC = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [isLoading, setLoading] = useState(true)
 
//   useEffect(() => {
//     fetch('http://localhost:8000/items')
//     .then(response => response.json())
//       .then((data) => {
//           setMenuItems(data)
//           setLoading(false)
//       })
//   }, [])

//   const onClick: MenuProps['onClick'] = (e) => {
//     console.log('click ', e);
//   };
 
//   if (isLoading) return <p>Loading...</p>
//   //if (!data) return <p>No profile data</p>


//   return(
//     <>
//     <input id="input" name="name" type='text' placeholder='Search' autoFocus></input>
//     <Menu
//       onClick={onClick}
//       style={{ width: 256 }}
//       defaultSelectedKeys={['1']}
//       defaultOpenKeys={['sub1']}
//       mode="inline"
//       items={menuItems}
//     />
//     </>
//   );
// };

// export default menubar;

//////////////////////////////////////////////// 2nd working code

// import { useState, useEffect } from 'react';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Menu, Input } from 'antd';
// type MenuItem = {
//   key: string;
//   label: string;
//   children?: MenuItem[];
// };
// type TItem = {
//   name: string,
//   email: string,
//   id: number,
// }

// const menubar: React.FC = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [isLoading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:8000/items')
//     .then(response => response.json())
//       .then((data) => {
//           setMenuItems(data)
//           setLoading(false)
//       })
//   }, [])

//   const onClick: MenuProps['onClick'] = (e) => {
//     console.log('click ', e);
//   };

//   const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   }
  

//   const filterItems = (items: MenuItem[], term: string): MenuItem[] => {
//     return items.reduce((acc: MenuItem[], item: MenuItem) => {
//       if (item.label && item.label.toLowerCase().includes(term.toLowerCase())) {
//         acc.push(item);
//       } else if (item.children) {
//         const filteredChildren = filterItems(item.children, term);
//         if (filteredChildren.length > 0) {
//           acc.push({ ...item, children: filteredChildren });
//         }
//       }
//       return acc;
//     }, []);
//   };
  

//   const filteredItems = filterItems(menuItems, searchTerm);

//   if (isLoading) return <p>Loading...</p>

//   return(
//     <div>
//       <Input placeholder="Search" onChange={onSearch} />
//       <Menu
//         onClick={onClick}
//         style={{ width: 256 }}
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={['sub1']}
//         mode="inline"
//         items={filteredItems}  
//       />
//     </div>
//   );
// };

// export default menubar;
