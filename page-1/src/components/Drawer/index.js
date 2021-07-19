import React, { useEffect } from "react";
import { Transition } from "react-transition-group";
import {
  Drawer as DrawerContainer,
  DrawerOverlay,
  DrawerContent,
} from "styles";

const Drawer = ({ children, open, onClose, position }) => {
  const DURATION = 300;
  const DRAWER_WIDTH = 300;
  const rootElement = document.getElementById("root");

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

  const handleClose = () => {
    document.body.style.overflow = "";
    rootElement.style.overflow = "";
    onClose();
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      rootElement.style.overflow = "hidden";
    }
  }, [open, rootElement.style]);

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
            <DrawerContent>{children}</DrawerContent>
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
            onClick={handleClose}
          />
        )}
      </Transition>
    </>
  );
};

export default Drawer;
