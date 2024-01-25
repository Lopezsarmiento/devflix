import React, { useState } from 'react';
import { Container } from './List.styles';
import Card from '../../Card/Card';
import { Item } from './List.types';
import Modal from '../Modal/Modal';
import CardDetail from '../../CardDetail/CardDetail';

const List = ({ items }: { items: Item[] }) => {
  const [ selectedItem, setSelectedItem ] = useState<Item | null>(null);

  const handleClickedItem = (item: Item) => {
    console.log('clicking on item::', item);
    setSelectedItem(item);
  }

  const handleClosedModal = () => {
    setSelectedItem(null);
  }

  return (
    <Container>
      {items.map((item: Item) => {
        return <Card data={item} key={item.id} handleClick={handleClickedItem}/>;
      })}
      {selectedItem && (
        <Modal onClose={handleClosedModal}>
          <CardDetail item={selectedItem} />
        </Modal>
      )}
    </Container>
  );
}

export default List;