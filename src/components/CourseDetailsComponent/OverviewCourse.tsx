import React from 'react';

const OverviewCourse = () => {
  return (
    <>
      <div className='edu_wraper'>
        <h4 className='edu_title'>Course Overview</h4>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </p>
        <h6>Requirements</h6>
        <ul className='lists-3'>
          <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
          <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
          <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
          <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
          <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
        </ul>
      </div>
      <div className='edu_wraper'>
        <h4 className='edu_title'>Course Circullum</h4>
        <div id='accordionExample' className='accordion shadow circullum'>
          {/* Part 1 */}
          <div className='card'>
            <div id='headingOne' className='card-header bg-white shadow-sm border-0'>
              <h6 className='mb-0 accordion_title'>
                <a
                  href='#'
                  data-toggle='collapse'
                  data-target='#collapseOne'
                  aria-expanded='true'
                  aria-controls='collapseOne'
                  className='d-block position-relative text-dark collapsible-link py-2'
                >
                  Part 01: How To Learn Web Designing Step by Step
                </a>
              </h6>
            </div>
            <div
              id='collapseOne'
              aria-labelledby='headingOne'
              data-parent='#accordionExample'
              className='collapse show'
            >
              <div className='card-body pl-3 pr-3'>
                <ul className='lectures_lists'>
                  <li className='complete'>
                    <div className='lectures_lists_title'>
                      <i className='fas fa-check dios' />
                    </div>
                    Web Designing Beginner<span className='cls_timing'>40:20</span>
                  </li>
                  <li className='progressing'>
                    <div className='lectures_lists_title'>
                      <i className='fas fa-play dios' />
                    </div>
                    Startup Designing with HTML5 &amp; CSS3
                    <span className='cls_timing'>20:12</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How To Call Google Map iFrame<span className='cls_timing'>32:10</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    Create Drop Down Navigation Using CSS3
                    <span className='cls_timing'>25:05</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How to Create Sticky Navigation Using JS
                    <span className='cls_timing'>18:10</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Part 2 */}
          <div className='card'>
            <div id='headingTwo' className='card-header bg-white shadow-sm border-0'>
              <h6 className='mb-0 accordion_title'>
                <a
                  href='#'
                  data-toggle='collapse'
                  data-target='#collapseTwo'
                  aria-expanded='false'
                  aria-controls='collapseTwo'
                  className='d-block position-relative collapsed text-dark collapsible-link py-2'
                >
                  Part 02: Learn Web Designing in Basic Level
                </a>
              </h6>
            </div>
            <div
              id='collapseTwo'
              aria-labelledby='headingTwo'
              data-parent='#accordionExample'
              className='collapse'
            >
              <div className='card-body pl-3 pr-3'>
                <ul className='lectures_lists'>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How To Call Google Map iFrame<span className='cls_timing'>32:10</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How To embed video in html5 banner?
                    <span className='cls_timing'>32:10</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How to use SVG card in html5?<span className='cls_timing'>32:10</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    Create Drop Down Navigation Using CSS3
                    <span className='cls_timing'>25:05</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How to Create Sticky Navigation Using JS
                    <span className='cls_timing'>18:10</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Part 3 */}
          <div className='card'>
            <div id='headingThree' className='card-header bg-white shadow-sm border-0'>
              <h6 className='mb-0 accordion_title'>
                <a
                  href='#'
                  data-toggle='collapse'
                  data-target='#collapseThree'
                  aria-expanded='false'
                  aria-controls='collapseThree'
                  className='d-block position-relative collapsed text-dark collapsible-link py-2'
                >
                  Part 03: Learn Web Designing in Advance Level
                </a>
              </h6>
            </div>
            <div
              id='collapseThree'
              aria-labelledby='headingThree'
              data-parent='#accordionExample'
              className='collapse'
            >
              <div className='card-body pl-3 pr-3'>
                <ul className='lectures_lists'>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How To Call Google Map iFrame<span className='cls_timing'>32:10</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How To embed video in html5 banner?
                    <span className='cls_timing'>32:10</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How to use SVG card in html5?<span className='cls_timing'>32:10</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    Create Drop Down Navigation Using CSS3
                    <span className='cls_timing'>25:05</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How to Create Sticky Navigation Using JS
                    <span className='cls_timing'>18:10</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Part 04 */}
          <div className='card'>
            <div id='headingFour' className='card-header bg-white shadow-sm border-0'>
              <h6 className='mb-0 accordion_title'>
                <a
                  href='#'
                  data-toggle='collapse'
                  data-target='#collapseFour'
                  aria-expanded='false'
                  aria-controls='collapseFour'
                  className='d-block position-relative collapsed text-dark collapsible-link py-2'
                >
                  Part 04: How To Become Succes in Designing &amp; Development?
                </a>
              </h6>
            </div>
            <div
              id='collapseFour'
              aria-labelledby='headingFour'
              data-parent='#accordionExample'
              className='collapse'
            >
              <div className='card-body pl-3 pr-3'>
                <ul className='lectures_lists'>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How To Call Google Map iFrame<span className='cls_timing'>32:10</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How To embed video in html5 banner?
                    <span className='cls_timing'>32:10</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How to use SVG card in html5?<span className='cls_timing'>32:10</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    Create Drop Down Navigation Using CSS3
                    <span className='cls_timing'>25:05</span>
                  </li>
                  <li className='unview'>
                    <div className='lectures_lists_title'>
                      <i className='fa fa-lock dios lock' />
                    </div>
                    How to Create Sticky Navigation Using JS
                    <span className='cls_timing'>18:10</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewCourse;
