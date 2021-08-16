//the App component:
var App = () => (
  <div >
    <h2>Welcome to Lucy's Grocery!</h2>
    <GroceryList />
  </div>
);

/*
//before:
//The GroceryList component:
const GroceryList = () => {
  return (
    <div>
      <Cucumbers />
      <Kale />
    </div>
  );
}


//The Cucumbers component:
const Cucumbers = () => {
  return (
    <li>Cucumbers</li>
  )
}

//The Kale component:
const Kale = () => {
  return (
    <li>Kale</li>
  )
}
*/


const GroceryList = () => {
  return (
    <div>
      <h4>Grocery List</h4>
      <GroceryListItem items={['Bakery and Bread', 'Meat and Seafood', 'Pasta and Rice', 'Oils, Sauces, Salad Dressings, and Condiments', 'Cereals and Breakfast Foods', 'Soups and Canned Goods', 'Frozen Foods', 'Dairy, Cheese, and Eggs', 'Produce', 'Snacks and Crackers', 'Drinks']}/>
    </div>
  );
}

/*
//the old GroceryListItem component:
const GroceryListItem = (props) => {
  const items = props.items;
  const listItems = items.map((item) =>
    <li key={item}>
      {item}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
*/

//create GroceryListItem component <ul></ul>:
const GroceryListItem = (props) => {
  return (
    <ul>
      {props.items.map((item) =>
      <EachItem item={item}/>
      )}
    </ul>
  );
}




//create each item to be a component using a class component:
class EachItem extends React.Component {
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemMouseOver() {
    this.setState({
      done: !this.state.done
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    var style = {
      background: this.state.done ? 'gold' : 'none'
    };

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`

    return (
          <li style = {style} onMouseOver={this.onListItemMouseOver.bind(this)}>
            {this.props.item}
          </li>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('app'));