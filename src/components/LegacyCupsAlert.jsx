import React from 'react';
import {inject, observer} from 'mobx-react';

import InlineNotification from './InlineNotification';

class LegacyCupsAlert extends React.Component {
  constructor(props){
    super(props);
    this.state = { show: true }
  }

  render() {
    return (
      Object.keys(this.props.system.tub.legacyCups).length > 0 && this.state.show && !localStorage.getItem('LegacyCDPsAlertClosed') &&
      <InlineNotification
        caption="Migrate Existing CDPs"
        message="Your account has one or more existing CDPs from the old Dai dashboard. You'll need to migrate these CDPs to the new dashboard to see and interact with them here. Once migrated, your CDPs will only be accesible via this dashboard."
        buttonText="Continue"
        onCloseButtonClick={ () => { localStorage.setItem('LegacyCDPsAlertClosed', true); this.setState({show: false}); } }
        onButtonClick={ () => this.props.setOpenMigrate(true) }
      />
    )
  }
}

export default inject('system')(observer(LegacyCupsAlert));
