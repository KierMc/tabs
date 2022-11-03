import React from 'react'

const Tabs = (props) => {
    const {tabs} = props;
    const {current, setCurrent}=props;

    const changeTab = (e,i) => {
        e.preventDefault();
        setCurrent(tabs[i]);
    }

    return (
        <div>
            <div className='tabs'>
            {
                tabs.map((tab,i) => 
                <div className="tab" onClick={(e) => {changeTab(e,i)}}>
                    Tab {i+1}
                </div>
                )
            }
            </div>
            <div>
                {current.content}
            </div>
        </div>
    )
}

export default Tabs