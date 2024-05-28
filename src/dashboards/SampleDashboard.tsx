import { BaseDashboard } from "@microsoft/teamsfx-react";
import "../styles/SampleDashboard.css";
import ChartWidget from "../widgets/ChartWidget";
import ListWidget from "../widgets/ListWidget";
import { DexScoreWidget } from "../widgets/DexScoreWidget";
import { SocScoreWidget } from "../widgets/socScoreWidget";
import { CarbonEmissionWidget } from "../widgets/CarbonEmissionWidget";
import { DeviceListWidget } from "../widgets/DeviceListWidget";

export default class SampleDashboard extends BaseDashboard<any, any> {
  override styling(): string {
    return "customize-class-name";
  }

  override layout(): JSX.Element | undefined {
    return (
      <>
        <div className='header'>
          <DeviceListWidget />
        </div>
        <div className='first'>
          <DexScoreWidget />
        </div>
        <div className='second'>
          <SocScoreWidget />
        </div>
        <div className='third'>
          <CarbonEmissionWidget />
        </div>
        <div className='first-footer'>
          <ListWidget />
        </div>
        <div className='second-footer'>
          <ListWidget />
        </div>
        <div className='third-footer'>
          <ListWidget />
        </div>
      </>
    );
  }
}
