import { HeaderTitle,HeaderContainer,HeaderForm,HeaderButton,SalectBox,SearchInput } from "./Header.style"



const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>BOOKS OR MAGAZINES</HeaderTitle>
      <HeaderForm>
        <SearchInput type="search" placeholder="search ... "/>
        <SalectBox>
          <option>All</option>
        </SalectBox>
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  )
}

export default Header