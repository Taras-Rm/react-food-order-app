import React from 'react';

function Restaurant() {
  const [activeItem, setActiveItem] = React.useState(null);

  return (
    <div>
      <div>
        <div class="mainbanner">
          <div class="mainbanner_headers">
            <h1 class="mainbanner__header_one">Dishoom</h1>
            <h2 class="mainbanner__header_two">pizza, sushi, vegan</h2>
          </div>
        </div>

        <div class="restourant_case">
          <ul class="restourant_case__list">
            <li
              class={`${
                activeItem === null ? 'active_restourant_case__list_item' : ''
              } restourant_case__list_item`}
              onClick={() => setActiveItem(null)}>
              Menu
            </li>

            <li
              class={`${
                activeItem === 1 ? 'active_restourant_case__list_item' : ''
              } restourant_case__list_item`}
              onClick={() => setActiveItem(1)}>
              Reviews
            </li>
          </ul>
        </div>

        <div class="order">
          <div class="wrapper">
            <div class="foodlist">
              <div class="food_list_item">
                <div class="food_info">
                  <h3 class="food_info_title">Chicken</h3>
                  <div class="food_info_category">chicken, rise</div>
                  <span class="food_price"> 20.00 </span>
                </div>
                <div class="food_item_functionality">
                  <span class="food_item_count"> 1 </span>
                  <div class="food_item_btns">
                    <div class="food_item_btn">-</div>
                    <div class="food_item_btn">+</div>
                  </div>
                </div>
              </div>
              <div class="food_list_item">
                <div class="food_info">
                  <h3 class="food_info_title">Chicken</h3>
                  <div class="food_info_category">chicken, rise</div>
                  <span class="food_price"> 20.00 </span>
                </div>
                <div class="food_item_functionality">
                  <span class="food_item_count"> 1 </span>
                  <div class="food_item_btns">
                    <div class="food_item_btn">-</div>
                    <div class="food_item_btn">+</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="basket">
              <div class="basket_title">Basket</div>
              <div class="basket_items">
                <div class="basket_item">
                  <span class="basket_item_name">Chicken lvflg kkgf</span>
                  <div class="basket_item_func">
                    <div class="basket_btn">-</div>
                    <span class="basket_count"> 1 </span>
                    <div class="basket_btn">+</div>
                  </div>
                  <span class="basket_item_price">20.00</span>
                </div>
                <div class="basket_item">
                  <span class="basket_item_name">Chicken</span>
                  <div class="basket_item_func">
                    <div class="basket_btn">-</div>
                    <span class="basket_count"> 1 </span>
                    <div class="basket_btn">+</div>
                  </div>
                  <span class="basket_item_price">20.00</span>
                </div>
              </div>
              <div class="basket_total">
                <div class="basket_total_item">
                  <span class="basket_total_item_f">Sub-total</span>
                  <span class="basket_total_item_s">15.00</span>
                </div>
                <div class="basket_total_item">
                  <span class="basket_total_item_f">Delivery costs:</span>
                  <span class="basket_total_item_s">free</span>
                </div>
                <div class="basket_total_item end">
                  <span class="basket_total_item_f">total</span>
                  <span class="basket_total_item_s">15.00</span>
                </div>
              </div>
              <button class="checkout_btn">Checkount</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
