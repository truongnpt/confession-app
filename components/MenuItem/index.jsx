import React, { useRef, useEffect } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ButtonWrapper } from 'components/Navigation';
import { Span } from 'components/Paragraph';
import SendIcon from 'public/icons/icon-tool-send.svg';
import Link from 'next/link';

export const MenuItem = (props) => {
  const { menu, className, handleClick } = props;
  const subMenuRef = useRef();

  useEffect(() => {
    subMenuRef.current.classList.remove('expanded');
  }, []);

  return (
    <ListGroupItem ref={subMenuRef} className={className}>
      {menu.type === 'button' ? (
        <ButtonWrapper
          variant="primary"
          href={menu.slug}
          handleClick={handleClick}
        >
          <React.Fragment>
            <SendIcon />
            <Span>{menu.name}</Span>
          </React.Fragment>
        </ButtonWrapper>
      ) : (
        <Link href={menu.slug} color="primary">
          <a onClick={handleClick}>{menu.name}</a>
        </Link>
      )}
    </ListGroupItem>
  );
};

MenuItem.propTypes = {
  menu: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
    type: PropTypes.string,
    sub_menu: PropTypes.array,
  }),
  className: PropTypes.string,
  handleClick: PropTypes.func,
};
