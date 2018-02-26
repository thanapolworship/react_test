import { injectGlobal } from 'styled-components'
import { COLORS } from '../bases/variables'

//`
injectGlobal`
  body {
    background-color: ${COLORS.GRAY};
    color: ${COLORS.GRAY002};
    font-size: 14px;
  }

  .avatar {
    max-width: 31px;
    max-height: 31px;
    border: 1px solid ${COLORS.BLUE};
    border-radius: 50%;
  }

  .tagManagement {
    background-color: ${COLORS.WHITE};
    padding: 40px 28px;
    margin: 30px;
    margin-left: 329px;
  }

  .tableRow {
    display: flex;
    /* flex-direction: row; */
    /* flex-wrap: no-wrap; */
    /* border-collapse: collapse; */

    &.header {
      font-size: 16px;
      border-bottom: 2px solid ${COLORS.GRAY001};
    }

    .tableCell {
      /* flex-grow: 1; */
      padding: 5px;
      /* flex: 1; */

      &:nth-of-type(1) {
        /* min-width: 45px; */
        width: 45px;
      }

      &:nth-of-type(2) {
        /* width: calc(60% - 163px); */
        /* flex: 1; */
        width: 60%;
      }

      &:nth-of-type(3) {
        /* width: 20%; */
        min-width: 140px;
        width: 20%;
      }

      &:nth-of-type(4) {
        width: 20%;
        min-width: 140px;
      }

      &:nth-of-type(5) {
        min-width: 118px;
        width: 118px;
      }
    }
  }


.coverRadio {
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%;

  img {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
    width: 100%;
    height: auto;
    transform: translateY(-50%);
  }
}


`