import { Button, Text } from "@fluentui/react-components";
import { BaseWidget } from "@microsoft/teamsfx-react";
import {
  GaugeChart,
  IGaugeChartProps,
  GaugeChartVariant,
  DataVizPalette,
} from "@fluentui/react-charting";
import { CarbonEmissionModel } from "../models/carbonEmissionModel";
import { getCarbonEmissionData } from "../services/carbonEmissionService";
import {
  Info24Regular,
  Person24Regular,
  MoreHorizontal32Regular,
  ArrowTrendingCheckmark20Regular,
  Globe24Regular,
} from "@fluentui/react-icons";
import { InfoLabel } from "@fluentui/react-components";
import { Display } from "@fluentui/react-components";

interface CarbonEmissionWidgetState {
  data?: CarbonEmissionModel;
}

export class CarbonEmissionWidget extends BaseWidget<
  any,
  CarbonEmissionWidgetState
> {
  override async getData(): Promise<CarbonEmissionWidgetState> {
    return { data: getCarbonEmissionData() };
  }

  override header(): JSX.Element | undefined {
    return (
      <div>
        <Globe24Regular />
        <Text id='area-chart-title'>Carbon Emission in CO2e</Text>
        <InfoLabel size='small' info={"some caption here"}></InfoLabel>
        {/* <Button icon={<MoreHorizontal32Regular />} appearance='transparent' /> */}
      </div>
    );
  }

  override body(): JSX.Element | undefined {
    return (
      <div>
        {/* <GaugeChart
          width={300}
          height={150}
          segments={[
            { size: 70, color: DataVizPalette.success, legend: "Used" },
            {
              size: 100 - 70,
              color: DataVizPalette.disabled,
              legend: "Available",
            },
          ]}
          chartValue={70}
          hideMinMax={false}
          variant={GaugeChartVariant.SingleSegment}
          sublabel={"My score"}
        /> */}
        <Display>234</Display> <Text>kg CO2e</Text>
      </div>
    );
  }

  override footer(): JSX.Element | undefined {
    return (
      <div>
        <ArrowTrendingCheckmark20Regular />
        <Text>Your score is higher than 40% of your organization</Text>
      </div>
    );
  }
}
