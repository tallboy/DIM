import React from 'react';
import { t } from 'app/i18next-t';
import { AppIcon, refreshIcon } from './icons';
import { loadingTracker } from './loading-tracker';
import GlobalHotkeys from '../hotkeys/GlobalHotkeys';
import { Subject, Subscription } from 'rxjs';

export const refresh$ = new Subject();

export function refresh(e?) {
  // Individual pages should listen to this event and decide what to refresh,
  // and their services should decide how to cache/dedup refreshes.
  // This event should *NOT* be listened to by services!
  if (e) {
    e.preventDefault();
  }
  refresh$.next();
}

export default class Refresh extends React.Component<{}, { active: boolean }> {
  private subscription: Subscription;

  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  componentDidMount() {
    this.subscription = loadingTracker.active$.subscribe((active) => {
      this.setState({ active });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    const { active } = this.state;

    return (
      <a className="link" onClick={refresh} title={t('Header.Refresh')} role="button">
        <GlobalHotkeys
          hotkeys={[
            {
              combo: 'r',
              description: t('Hotkey.RefreshInventory'),
              callback: refresh
            }
          ]}
        />
        <AppIcon icon={refreshIcon} spinning={active} />
      </a>
    );
  }
}
