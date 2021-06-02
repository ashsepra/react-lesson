import React from 'react';

class ListComponent extends React.Component {
  renderList() {
    const list = this.props.data.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
        </tr>
      )
    })

    return list;
  }
  render() {
    return (
      <table>
        <thead>
          <th>Zodiac Name</th>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    );
  }
}

export default ListComponent;
