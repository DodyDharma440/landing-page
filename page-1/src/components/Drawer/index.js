import React from "react";
import { Transition } from "react-transition-group";
import { Drawer as DrawerContainer, DrawerOverlay } from "styles";

const Drawer = ({ children, open, onClose, position }) => {
  const DURATION = 300;
  const DRAWER_WIDTH = 300;

  const overlayDefaultStyle = {
    transition: `opacity ${DURATION}ms ease-in-out`,
    opacity: 0,
  };

  const overlayTransitionStyles = {
    entering: {
      opacity: 0.7,
      left: 0,
    },
    entered: {
      opacity: 0.7,
    },
    exiting: {
      opacity: 0,
    },
    exited: {
      opacity: 0,
      left: "unset",
    },
  };

  const drawerDefaultStyle = {
    transition: `all ${DURATION}ms ease-in-out`,
    left: !position || position === "left" ? -DRAWER_WIDTH : "100%",
    right: position === "right" ? DRAWER_WIDTH : 0,
  };

  const drawerTransitionStyle = {
    entering: {
      left:
        !position || position === "left" ? 0 : `calc(100% - ${DRAWER_WIDTH}px)`,
      right: position === "right" ? 0 : -DRAWER_WIDTH,
    },
    entered: {
      left:
        !position || position === "left" ? 0 : `calc(100% - ${DRAWER_WIDTH}px)`,
      right: position === "right" ? 0 : -DRAWER_WIDTH,
    },
    exiting: {},
    exited: {},
  };

  return (
    <>
      <Transition in={open} timeout={DURATION}>
        {(state) => (
          <DrawerContainer
            position={position}
            style={{
              ...drawerDefaultStyle,
              ...drawerTransitionStyle[state],
            }}
          >
            {children}
          </DrawerContainer>
        )}
      </Transition>
      <Transition in={open} timeout={DURATION}>
        {(state) => (
          <DrawerOverlay
            style={{
              ...overlayDefaultStyle,
              ...overlayTransitionStyles[state],
            }}
            onClick={onClose}
          />
        )}
      </Transition>
    </>
  );
};

export default Drawer;
