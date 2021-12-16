import {useState} from 'react';
import houses from "../../houses";
import Head from "next/head";
import Layout from "../../components/Layout";
import DateRangePicker from "../../components/DateRangePicker";
import {useStoreActions} from "easy-peasy";


export async function getServerSideProps({query}) {
    const {id} = query
    return {
        props: {
            house: houses.filter((house) => house.id === parseInt(id))[0]
        }
    }
}

const calcNumberOfNightsBetweenDates = (startDate, endDate) => {
    const start = new Date(startDate) //clone
    const end = new Date(endDate) //clone
    let dayCount = 0

    while (end > start) {
        dayCount++
        start.setDate(start.getDate() + 1)
    }

    return dayCount
}

const House = ({house}) => {

    const [dateChosen, setDateChosen] = useState(false);

    const [numberOfNightsBetweenDates, setNumberOfNightsBetweenDates] = useState(0)

    const setShowLoginModal = useStoreActions(
        (actions) => actions.modals.setShowLoginModal
    )

    return (
        <Layout content={
            <div className="container">
                <Head>
                    <title>{house.title}</title>
                </Head>
                <article>
                    <img src={house.picture} width="100%" alt={house.title}/>
                    <p>
                        {house.type} - {house.town}
                    </p>
                    <p>{house.title}</p>
                </article>
                <aside>
                    <h2>Choose a date</h2>
                    <DateRangePicker datesChanged={(startDate, endDate) => {
                        setNumberOfNightsBetweenDates(
                            calcNumberOfNightsBetweenDates(startDate, endDate)
                        )
                        setDateChosen(true)
                    }
                    }/>
                    {dateChosen && (
                        <div>
                            <h2>Price per night</h2>
                            <p>${house.price}</p>
                            <h2>Total price for booking</h2>
                            <p>${(numberOfNightsBetweenDates * house.price).toFixed(2)}</p>
                            <button className="reserve" onClick={() => {
                                setShowLoginModal()
                            }}>Reserve</button>
                        </div>
                    )}
                </aside>
                <style jsx>{`
                  .container {
                    display: grid;
                    grid-template-columns: 60% 40%;
                    grid-gap: 30px;
                  }

                  aside {
                    border: 1px solid #ccc;
                    padding: 20px;
                  }

                `}</style>
            </div>
        }/>
    );
};

export default House;
