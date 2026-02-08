import './index.css'

const TabItem = props => {
  const {tabdetails, updateElement, isActive} = props
  const {tabId, displayText} = tabdetails
  const onClickElement = () => {
    updateElement(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li>
      <button
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickElement}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
