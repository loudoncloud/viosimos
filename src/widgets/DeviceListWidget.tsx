import { Button, Text } from "@fluentui/react-components";
import { BaseWidget } from "@microsoft/teamsfx-react";
import {
  GaugeChart,
  IGaugeChartProps,
  GaugeChartVariant,
  DataVizPalette,
} from "@fluentui/react-charting";
import { DeviceListModel } from "../models/deviceListModel";
import { getDeviceListData } from "../services/deviceListService";
import {
  Info24Regular,
  Person24Regular,
  MoreHorizontal32Regular,
  ArrowTrendingCheckmark20Regular,
  Globe24Regular,
  Laptop24Regular,
} from "@fluentui/react-icons";

import {
  makeStyles,
  shorthands,
  Caption1,
  tokens,
  Subtitle1,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";
import "../styles/DeviceListWidget.css";

const resolveAsset = (asset: string) => {
  const ASSET_URL = "https://upload.wikimedia.org/wikipedia/commons/4/48/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  main: {
    ...shorthands.gap("36px"),
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  card: {
    width: "360px",
    maxWidth: "100%",
    height: "fit-content",
  },

  section: {
    width: "fit-content",
  },

  title: {
    ...shorthands.margin(0, 0, "12px"),
  },

  horizontalCardImage: {
    width: "64px",
    height: "64px",
  },

  headerImage: {
    ...shorthands.borderRadius("4px"),
    maxWidth: "44px",
    maxHeight: "44px",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  text: {
    ...shorthands.margin(0),
  },
});

const Title = ({ children }: React.PropsWithChildren<{}>) => {
  const styles = useStyles();

  return (
    <Subtitle1 as='h4' block className={styles.title}>
      {children}
    </Subtitle1>
  );
};

export const Orientation = () => {
  const styles = useStyles();
};

interface DeviceListWidgetState {
  data?: DeviceListModel;
}

export class DeviceListWidget extends BaseWidget<any, DeviceListWidgetState> {
  override async getData(): Promise<DeviceListWidgetState> {
    return { data: getDeviceListData() };
  }

  override header(): JSX.Element | undefined {
    return (
      <>
        <div>
          <Laptop24Regular />
          <Text id='area-chart-title'>My Devices</Text>
          <Button icon={<MoreHorizontal32Regular />} appearance='transparent' />
        </div>
        <div></div>
      </>
    );
  }

  override body(): JSX.Element | undefined {
    return (
      <>
        <div className='main'>
          <Card className='card' orientation='horizontal'>
            <CardPreview>
              <img
                className='headerImage'
                src={resolveAsset("Dell_Logo.svg")}
                alt='App Name Document'
              />
            </CardPreview>
            <CardHeader
              header={<Text weight='semibold'>Latitude E547</Text>}
              description={<Caption1>Dell</Caption1>}
              action={
                <Button
                  appearance='transparent'
                  icon={<MoreHorizontal20Regular />}
                  aria-label='More options'
                />
              }
            />
          </Card>

          <Card className='card' orientation='horizontal'>
            <CardPreview>
              <img
                className='headerImage'
                src={resolveAsset("Dell_Logo.svg")}
                alt='App Name Document'
              />
            </CardPreview>
            <CardHeader
              header={<Text weight='semibold'>ThinkPad L14</Text>}
              description={<Caption1>Lenovo</Caption1>}
              action={
                <Button
                  appearance='transparent'
                  icon={<MoreHorizontal20Regular />}
                  aria-label='More options'
                />
              }
            />
          </Card>

          <Card className='card' orientation='horizontal'>
            <CardPreview>
              <img
                className='headerImage'
                src={resolveAsset("Dell_Logo.svg")}
                alt='App Name Document'
              />
            </CardPreview>
            <CardHeader
              header={<Text weight='semibold'>EliteBook 840 G8</Text>}
              description={<Caption1>HP</Caption1>}
              action={
                <Button
                  appearance='transparent'
                  icon={<MoreHorizontal20Regular />}
                  aria-label='More options'
                />
              }
            />
          </Card>
        </div>
      </>
    );
  }

  override footer(): JSX.Element | undefined {
    return <div></div>;
  }
}
