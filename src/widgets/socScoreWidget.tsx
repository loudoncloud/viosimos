import { Button, Text } from "@fluentui/react-components";
import { BaseWidget } from "@microsoft/teamsfx-react";
import {
  GaugeChart,
  IGaugeChartProps,
  GaugeChartVariant,
  DataVizPalette,
} from "@fluentui/react-charting";
import { SocScoreModel } from "../models/socScoreModel";
import { getSocScoreData } from "../services/socScoreService";
import {
  Info24Regular,
  Person24Regular,
  MoreHorizontal32Regular,
  ArrowTrendingCheckmark20Regular,
  PeopleCommunity24Regular,
} from "@fluentui/react-icons";
import { InfoLabel } from "@fluentui/react-components";

interface SocScoreWidgetState {
  data?: SocScoreModel;
}

export class SocScoreWidget extends BaseWidget<any, SocScoreWidgetState> {
  override async getData(): Promise<SocScoreWidgetState> {
    return { data: getSocScoreData() };
  }

  override header(): JSX.Element | undefined {
    return (
      <div>
        <PeopleCommunity24Regular />
        <Text id='area-chart-title'>My Society Score</Text>
        <InfoLabel size='small' info={"some caption here"}></InfoLabel>
        {/* <Button icon={<MoreHorizontal32Regular />} appearance='transparent' /> */}
      </div>
    );
  }

  override body(): JSX.Element | undefined {
    return (
      <div>
        <GaugeChart
          width={300}
          height={150}
          segments={[
            {
              size: 50,
              color: DataVizPalette.warning,
              legend: "Below Org Average",
            },
            {
              size: 50,
              color: DataVizPalette.success,
              legend: "Above Org Average",
            },
          ]}
          chartValue={70}
          hideMinMax={false}
          variant={GaugeChartVariant.MultipleSegments}
          sublabel={"My score"}
        />
      </div>
    );
  }

  override footer(): JSX.Element | undefined {
    return (
      <div>
        <Text>
          By taking action on above recommendation can improve your device
          experience score by 1
        </Text>
        <ArrowTrendingCheckmark20Regular />
      </div>
    );
  }
}
