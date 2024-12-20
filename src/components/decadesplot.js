import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './decadesplot.css'

const Decadesplot = (props) => {
  return (
    <div className={`decadesplot-container1 ${props.rootClassName} `}>
      <div className="decadesplot-container2">
        <span>
          {props.text ?? (
            <Fragment>
              <span className="decadesplot-text2">
                <span className="decadesplot-text3">
                  From the regression line in this plot, we see that the male
                  ratio in movies is decreasing. That said, the ratio of male
                  roles is still 0.69.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          )}
        </span>
        <iframe
          src="https://scanton-epfl.github.io/ada-figures/male_ratio_time.html"
          className="decadesplot-iframe"
        ></iframe>
      </div>
    </div>
  )
}

Decadesplot.defaultProps = {
  text: undefined,
  rootClassName: '',
}

Decadesplot.propTypes = {
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Decadesplot
