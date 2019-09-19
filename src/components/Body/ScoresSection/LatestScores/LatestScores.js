import React from 'react';
import { ScoreCard } from './ScoreCard';
import { categories, categoryData, colors } from '../../constants';

const RowData1 = [{
    title: categories.PERSONAL_LIFE,
    color: colors.RED,
},
{
    title: categories.WORK_LIFE_BALANCE,
    color: colors.GREEN,
},
{
    title: categories.PERSONAL_WELLNESS,
    color: colors.YELLOW,
},
{
    title: categories.TEAM_FUN,
    color: colors.PURPLE,
}];

const RowData2 = [{
    title: categories.PRODUCTION_SPEED,
    color: colors.RED,
},
{
    title: categories.PRODUCT_QUALITY,
    color: colors.GREEN,
},
{
    title: categories.COMMUNICATION,
    color: colors.YELLOW,
},
{
    title: categories.COLLABORATION,
    color: colors.PURPLE,
}];

class LatestScrores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSelectCardName: categories.COMMUNICATION,
        };
    }

    onCardClick = (event) => {
        event.preventDefault();
        this.setState({
            currentSelectCardName: event.target.dataset.value
        });
    };

    render() {
        return (
            <div className="latest-scores">
                <h5 className="text-center text-dark">Latest Scores</h5>
                <div className="row m-0">
                    {
                        RowData1.map((item) =>
                            <div key={item.title} className="col-md-6 col-lg-3">
                                <ScoreCard title={item.title}
                                    score={categoryData[item.title]}
                                    color={item.color}
                                    onClick={this.onCardClick}
                                    currentSelectedCard={this.state.currentSelectCardName} />
                            </div>
                        )
                    }
                </div>
                <div className="row m-0">
                    {
                        RowData2.map((item) =>
                            <div key={item.title} className="col-md-6 col-lg-3">
                                <ScoreCard title={item.title}
                                    score={categoryData[item.title]}
                                    color={item.color}
                                    onClick={this.onCardClick}
                                    currentSelectedCard={this.state.currentSelectCardName} />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    };
}

export default LatestScrores;