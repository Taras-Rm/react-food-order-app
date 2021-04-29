import React from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="recipesmenu">
      <span>Cuisines: </span>
      <ul className="recipesmenu__list">
        <li
          onClick={() => onSelectItem(null)}
          className={`${activeItem === null ? 'active_list_item' : ''} list_item`}>
          all
        </li>

        {
          // перевірка чи прийшли категорії
          items &&
            items.map((item, index) => (
              <li
                onClick={() => onSelectItem(index)}
                key={`${item}_${index}`}
                className={`${activeItem === index ? 'active_list_item' : ''} list_item`}>
                {item}
              </li>
            ))
        }
      </ul>
    </div>
  );
};

// class Categories extends React.Component {
//   state = {
//     activeItem: 'all',
//   };

//   onClickI = (name) => {
//     this.setState({ activeItem: name });
//   };

//   render() {
//     return (
//       <div className="recipesmenu">
//         <span>Cuisines: </span>
//         <ul className="recipesmenu__list">
//           <li className="recipesmenu__list_item">
//             <a className="list_item active_list_item" href="#r">
//               all
//             </a>
//           </li>

//           {this.props.items.map((item, index) => (
//             <li
//               onClick={() => this.onClickI(item)}
//               key={`${item}_${index}`}
//               className="recipesmenu__list_item">
//               <a
//                 // додавання класу для активного пункту
//                 className={`${this.state.activeItem === item ? 'active_list_item' : ''} list_item`}
//                 href="#r">
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default Categories;
