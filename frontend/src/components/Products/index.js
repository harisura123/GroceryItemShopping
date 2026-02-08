import './index.css'
import Headers from '../Headers'
import ProductList from '../ProductList'
import Footer from '../Footer'
import TabItem from '../TabItem'
import Cookies from 'js-cookie'
import {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const tabsList = [{tabId: 'Vegetable', displayText: 'Vegetable'},{tabId: 'Fruit', displayText: 'Fruit'},{tabId: 'Diary', displayText: 'Diary'},{tabId: 'Meat', displayText: 'Meat'}, {tabId: 'Items', displayText: 'Items'}]

class Products extends Component{
    state = {activeId: tabsList[0].tabId, itemList: [], searchInput: ''}
    updateElement = value => {
        this.setState({activeId: value})
    }
    componentDidMount() {
        this.onGetHomeWatch()
    }
    onGetHomeWatch = async () => {
        const apiWatch = "https://groceryshoppingbackend.onrender.com/auth/Product"
        const options = {
            method: 'GET',
        }
        const response = await fetch(apiWatch, options)
        const formatted = await response.json()
        const fetched = formatted.map(eachwatch => ({
        _id: eachwatch._id,
        category: eachwatch.category,
        itemName: eachwatch.itemName,
        quantity: eachwatch.quantity,
        price: eachwatch.price,
        itemId: eachwatch.itemId,
        imageUrl: eachwatch.imageUrl
      }))
        this.setState({itemList: fetched})
    }
    onChangeElement = event => {
        this.setState({searchInput: event.target.value})
    }

    onGetElement = () => {
        const {activeId, itemList} = this.state
        const searchResult = itemList.filter(
            each => each.category === activeId,
        )
        return searchResult
    }
    render(){
        const {activeId, searchInput} = this.state 
        const searchResult = this.onGetElement()
        const searchResults = searchResult.filter(eachUser =>
            eachUser.itemName.toLowerCase().includes(searchInput.toLowerCase()),
        )

        const renderProductList = () => {
            const jwtToken = Cookies.get('jwt_token')
            if (jwtToken === undefined){
                return <h1>Please Login!</h1>   
            }
            else{
            return(
                <ul className="ProductCardContainer">
                        {searchResults.map(eachapp => (
                            <ProductList appdetails={eachapp} key={eachapp.id} />
                        ))}
                </ul>
            )
            }
        }
        return(
            <>
            <Headers />
            <div className='ProductContainer'>
                <div className="ProductRow">
                    <h1>Our <span className="FeaturesTitle">Products</span></h1>
                    <div className='ProductInput'>
                        <FontAwesomeIcon className='IconBtnProduct' icon={faMagnifyingGlass}  />
                        <input type="search" placeholder="Search" className="Input" onChange={this.onChangeElement} value={searchInput}/>
                    </div>
                </div>
                <div className='TabListContainer'>
                    {tabsList.map(tabdetails => (
                        <TabItem
                            tabdetails={tabdetails}
                            key={tabdetails.id}
                            updateElement={this.updateElement}
                            isActive={activeId === tabdetails.tabId}
                        />
                    ))}
                </div>
                    {renderProductList()}
            </div>
            <Footer />
        </>
        )
    }
}

export default Products