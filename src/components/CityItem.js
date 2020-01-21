import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const CityItem = props => {
    return (
        <Card>
            <CardContent>
                <Typography>
                    {props.cityName}
                </Typography>
            </CardContent>
        </Card>
    )
};

export default CityItem;

