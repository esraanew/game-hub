import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'
interface props {
  onSelectedPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}
const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: props) => {
  const { data } = usePlatforms()
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map(platform => {
          return (
            <MenuItem
              onClick={() => onSelectedPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
