import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface props {
  onSelectedSortOrder: (sortOrder: string) => void
  sortOrder: string
}
const SortSelector = ({ sortOrder, onSelectedSortOrder }: props) => {
  const orders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: 'metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' }
  ]
  const currentSelection = orders.find(order => order.value === sortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSelection?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {orders.map(order => {
          return (
            <MenuItem
              onClick={() => onSelectedSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
