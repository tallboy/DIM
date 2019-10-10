import React from 'react';
import { ClickOutsideContext } from './ClickOutside';
import { Subject } from 'rxjs';

/**
 * The root element that lets ClickOutside work. This defines the
 * "Outside" for any ClickOutside children.
 */
export default class ClickOutsideRoot extends React.Component<{ children: React.ReactNode }> {
  private clickOutsideSubject = new Subject<React.MouseEvent>();

  render() {
    return (
      <ClickOutsideContext.Provider value={this.clickOutsideSubject}>
        <div onClick={this.onClick}>{this.props.children}</div>
      </ClickOutsideContext.Provider>
    );
  }

  onClick = (e: React.MouseEvent) => {
    this.clickOutsideSubject.next(e);
  };
}
