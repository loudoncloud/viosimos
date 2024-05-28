import { Button, Text } from "@fluentui/react-components";
import { BaseWidget } from "@microsoft/teamsfx-react";
import {
  GaugeChart,
  IGaugeChartProps,
  GaugeChartVariant,
  DataVizPalette,
} from "@fluentui/react-charting";
import { DexScoreModel } from "../models/dexScoreModel";
import { getDexScoreData } from "../services/dexScoreService";
import {
  Info24Regular,
  Person24Regular,
  MoreHorizontal32Regular,
  ArrowTrendingCheckmark20Regular,
} from "@fluentui/react-icons";
import { Nav, INavStyles, INavLinkGroup } from "@fluentui/react/lib/Nav";
import { navLinkGroups } from "../models/navModel";
import { Body2, Title1 } from "@fluentui/react-components";
import "../styles/DexScoreWidget.css";
import { InfoLabel } from "@fluentui/react-components";

interface DexScoreWidgetState {
  data?: DexScoreModel;
}

export class DexScoreWidget extends BaseWidget<any, DexScoreWidgetState> {
  override async getData(): Promise<DexScoreWidgetState> {
    return { data: getDexScoreData() };
  }

  override header(): JSX.Element | undefined {
    return (
      <div>
        <Person24Regular />
        <Text id='area-chart-title'>My Digital Experience Score</Text>
        <InfoLabel size='medium' info={"Some caption here"}></InfoLabel>

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
              size: 70,
              color: DataVizPalette.success,
              legend: "Achieved score",
            },
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
        />
      </div>
    );
  }

  override footer(): JSX.Element | undefined {
    return (
      <div>
        {" "}
        <Text>
          Your device is score is higher than 75% of your organization
        </Text>
        <Text>Good job. Your score increased 0.8 since last month</Text>
      </div>
    );
  }
}
