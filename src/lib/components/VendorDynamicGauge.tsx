import * as React from "react";
import * as Highcharts from "highcharts";
import * as ChartModuleMore from 'highcharts/highcharts-more.js';
import { HighchartsChart, XAxis, YAxis, Pane, SolidGaugeSeries, HighchartsProvider } from "react-jsx-highcharts";
import SolidGaugeModule from "highcharts/modules/solid-gauge";

// @ts-ignore
ChartModuleMore(Highcharts)
SolidGaugeModule(Highcharts);

const plotOptions = {
    solidgauge: {
        dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
        }
    }
};

const dataLabels = {
    format: `<div style="text-align:center"><span style="font-size:25px;color:black">{y}</span><br/><span style="font-size:12px;color:silver">score</span></div>`,
    y: -50
};


interface Props {
    value: number | null;
    name?: string;
    scale_low: number;
    scale_high: number;
    hint: string;
}



class VendorDynamicGauge extends React.Component<Props, any> {


    render() {

        const { value, name, scale_low, scale_high } = this.props;

        return (
            <HighchartsProvider Highcharts={Highcharts}>
                <HighchartsChart gauge plotOptions={plotOptions}>
                    <Pane
                        center={['50%', '85%']}
                        size='100%'
                        startAngle={-90}
                        endAngle={90}
                        background={{
                            // backgroundColor: {
                            //     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            //     stops: [
                            //         [0, '#FFF'],
                            //         [1, '#333']
                            //     ]
                            // },
                            // borderColor: "#cccccc",
                            // borderWidth: 1,
                            // @ts-ignore
                            innerRadius: '60%',
                            outerRadius: '100%',
                            shape: 'arc'
                        }} />
                    <XAxis />
                    <YAxis
                        stops={[ // 55BF3B
                            [0.1, '#DF5353'],
                            [0.5,  '#DDDF0D'],
                            [0.9, '#55BF3B']
                        ]}
                        lineWidth={0}
                        minorTickInterval={1}
                        tickPixelInterval={scale_high}
                        tickWidth={1}
                        className="gauge-title"
                        labels={{
                            y: 16,
                            style: { display: 'none' }
                        }}
                        min={scale_low}
                        max={scale_high}>
                        <YAxis.Title y={-110}>{name}</YAxis.Title>
                        <SolidGaugeSeries
                            name={name}
                            data={[ value || 0 ]}
                            dataLabels={dataLabels}
                        />
                    </YAxis>

                </HighchartsChart>
            </HighchartsProvider>
        );
    }

}

export default VendorDynamicGauge;