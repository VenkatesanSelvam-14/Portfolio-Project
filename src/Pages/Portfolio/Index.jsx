import React, { useState } from 'react';
import PageHeaderContent from '../../Components/PageHeaderContainer/Index';
import { BsInfoCircleFill } from 'react-icons/bs';
import './Styles.scss';
import PortfolioImage from '../Images/portfolio.jpg'

const portfolioData = [
    {
        id: 2,
        name: "Portfolio",
        image: PortfolioImage,
        link: 'https://www.youtube.com/'
    },
    // {
    //     id: 3,
    //     name: "Ecommerc",
    //     image: '',
    //     link: ''
    // },
    // {
    //     id: 2,
    //     name: "Ecommer",
    //     image: '',
    //     link: ''
    // },
    // {
    //     id: 3,
    //     name: "Ecomme",
    //     image: '',
    //     link: ''
    // },
    // {
    //     id: 2,
    //     name: "Ecom",
    //     image: '',
    //     link: ''
    // }
];

const filterData = [
    {
        filterId: 1,
        label: "All"
    },
    {
        filterId: 2,
        label: "Development"
    },
    {
        filterId: 3,
        label: "Design"
    }
];

const Portfolio = () => {

    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    }

    function handleHover(index) {
        setHoveredValue(index);
    }

    const handleVisitClick = (url) => {
        // Replace with the URL of the YouTube page or video you want to redirect to
        const youtubeURL = 'https://venkatesanportfolio.netlify.app/'; // Example URL

        window.open(url, '_blank');
       // window.location.href = youtubeURL;
    };

    const filteredItems = filteredValue === 1 ? portfolioData :
        portfolioData.filter(item => item.id === filteredValue);

    return (
        <session id="portfolio" className='portfolio'>
            <PageHeaderContent
                headerText={"My Portfolio"}
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className='portfolio__content'>
                <ul className='portfolio__content__filter'>
                    {
                        filterData.map((item, i) => (
                            <li
                                className={item.filterId === filteredValue ? 'active' : ''}
                                onClick={() => handleFilter(item.filterId)}
                                key={item.filterId}
                            >
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
                <div className='portfolio__content__cards'>
                    {
                        filteredItems.map((item, i) => (
                            <div
                                className='portfolio__content__cards__item'
                                key={`cardItem${item.name.trim()}`}
                                onMouseEnter={() => handleHover(i)}
                                onMouseLeave={() => handleHover(null)}
                            >
                                <div className='portfolio__content__cards__item__img-wrapper'>
                                    <a href={item.link}>
                                        <img alt='dummy data' src={item.image} />
                                    </a>
                                </div>
                                <div className='overlay'>
                                    {
                                        i === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <button onClick={handleVisitClick (item.link)} > Visit</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </session>
    );
}

export default Portfolio;
