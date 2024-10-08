export const defaultProps = {
    __TYPE: 'Tooltip',
    appendTo: null,
    at: null,
    autoHide: true,
    autoZIndex: true,
    baseZIndex: 0,
    closeOnEscape: false,
    content: null, // @todo: change with children
    disabled: false,
    event: null,
    hideDelay: 0,
    hideEvent: 'mouseleave',
    mouseTrack: false,
    mouseTrackLeft: 5,
    mouseTrackTop: 5,
    my: null,
    position: 'right',
    showDelay: 0,
    showEvent: 'mouseenter',
    showOnDisabled: false,
    target: null,
    updateDelay: 0,
    // events
    onBeforeHide: null,
    onBeforeShow: null,
    onHide: null,
    onShow: null
};
