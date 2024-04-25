import React from "react";
import {BarChart, ChartTooltipProps, RadarChart, ScatterChart} from '@mantine/charts';
import {Card, Paper, Text} from "@mantine/core";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

export default function Dashboard() {
  const data = [
    {
      product: 'Top Hakimiyeti',
      sales_january: 96,
    },
    {
      product: 'Bitiriş',
      sales_january: 95,
    },
    {
      product: 'Güç',
      sales_january: 59,
    },
    {
      product: 'Dayanıklık',
      sales_january: 70,
    },
    {
      product: 'Denge',
      sales_january: 50,
    },
    {
      product: 'Sürat Hız',
      sales_january: 80,
    },
  ];

  const scatterData = [
    {
      color: 'blue.5',
      name: 'Group 1',
      data: [
        { age: 10, BMI: 20 },
        { age: 15, BMI: 22 },
        { age: 20, BMI: 24 },
        { age: 25, BMI: 26 },
        { age: 30, BMI: 28 },
        { age: 35, BMI: 30 },
        { age: 40, BMI: 32 },
        { age: 45, BMI: 34 },
        { age: 50, BMI: 36 },
        { age: 55, BMI: 38 },
        { age: 60, BMI: 40 },
        { age: 65, BMI: 38 },
        { age: 70, BMI: 36 },
        { age: 75, BMI: 34 },
        { age: 80, BMI: 32 },
        { age: 85, BMI: 30 },
        { age: 90, BMI: 28 },
        { age: 95, BMI: 26 },
        { age: 100, BMI: 24 },
        { age: 105, BMI: 22 },
        { age: 110, BMI: 20 },
      ],
    },
  ];



  const barChartData = [
    {month: 'Ocak', Goller: 12},
    {month: 'Şubat', Goller: 7,},
    {month: 'Mart', Goller: 13},
    {month: 'Nisan', Goller: 4},
    {month: 'Mayıs', Goller: 10},
    {month: 'Haziran', Goller: 15},
  ];

  function ChartTooltip({payload}: ChartTooltipProps) {
    if (!payload) return null;

    return (
      <Paper px="md" py="sm" withBorder shadow="md" radius="md">
        {payload.map((item: any) => (
          <Text key={item.name} fz="sm">
            {item.name}: {item.value}
          </Text>
        ))}
      </Paper>
    );
  }

  function BarChartTooltip({label, payload}: ChartTooltipProps) {
    if (!payload) return null;

    return (
      <Paper px="md" py="sm" withBorder shadow="md" radius="md">
        <Text fw={500} mb={5}>
          {label}
        </Text>
        {payload.map((item: any) => (
          <Text key={item.name} c={item.color} fz="sm">
            {item.name}: {item.value}
          </Text>
        ))}
      </Paper>
    );
  }

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Card w={500} shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section withBorder>
            <Text m={12}>
              Oyuncu İstatistiği
            </Text>
          </Card.Section>
          <RadarChart
            gridColor={'rgba(164,163,163,0.96)'}
            h={'100%'}
            w={'100%'}
            data={data}
            dataKey="product"
            withPolarRadiusAxis={true}
            withPolarGrid={true}
            withPolarAngleAxis={true}
            series={[
              {name: 'sales_january', color: 'blue.4', opacity: 0.15},
            ]}
          />
        </Card>
        <Card w={500} shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section withBorder>
            <Text m={12}>
              Oyuncu Gol Geçmişi
            </Text>
          </Card.Section>
          <BarChart
            tooltipProps={{
              content: ({label, payload}) => <BarChartTooltip label={label} payload={payload}/>,
            }}
            tooltipAnimationDuration={200}
            h={300}
            data={barChartData}
            dataKey="month"
            orientation="vertical"
            yAxisProps={{width: 80}}
            barProps={{radius: 10}}
            series={[{name: 'Goller', color: 'blue.6'}]}
          />
        </Card>
      </div>
      <Card style={{marginTop: 30}} shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section mb={12} withBorder>
          <Text m={12}>
            Oyuncu Vücut Kitle İndeksi
          </Text>
        </Card.Section>
        <ScatterChart
          withLegend={false}
          tooltipProps={{
            content: ({payload}) => <ChartTooltip payload={payload}/>,
          }}
          gridColor={'gray'}
          w={'full'}
          h={320}
          legendProps={{verticalAlign: 'bottom', height: 90}}
          data={scatterData}
          dataKey={{x: 'age', y: 'BMI'}}
          xAxisLabel="Yaş"
          yAxisLabel="BMI"
        />
      </Card>
    </>
  )
}
