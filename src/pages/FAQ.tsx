import React from 'react';
import { PageTitle } from '~/components/FAQComponent';

export const FAQ = () => {
  return (
    <div>
      {/* ============================ Page Title Start================================== */}
      <PageTitle page='faqs' title="FAQ's" />
      {/* ============================ Page Title End ================================== */}
      {/* ============================ FAQ Start ================================== */}
      <section>
        <div className='container'>
          <div className='row justify-content-start'>
            <div className='col-xl-9 col-lg-10 col-md-12 col-sm-12'>
              <div id='accordionExample' className='accordion'>
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
                        How To Learn Web Designing Step by Step
                      </a>
                    </h6>
                  </div>
                  <div
                    id='collapseOne'
                    aria-labelledby='headingOne'
                    data-parent='#accordionExample'
                    className='collapse show'
                  >
                    <div className='card-body pl-3 pr-3 pt-0'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.{' '}
                      </p>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                        fuga.
                      </p>
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
                        Learn Web Designing in Basic Level
                      </a>
                    </h6>
                  </div>
                  <div
                    id='collapseTwo'
                    aria-labelledby='headingTwo'
                    data-parent='#accordionExample'
                    className='collapse'
                  >
                    <div className='card-body pl-3 pr-3 pt-0'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.{' '}
                      </p>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                        fuga.
                      </p>
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
                        Learn Web Designing in Advance Level
                      </a>
                    </h6>
                  </div>
                  <div
                    id='collapseThree'
                    aria-labelledby='headingThree'
                    data-parent='#accordionExample'
                    className='collapse'
                  >
                    <div className='card-body pl-3 pr-3 pt-0'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.{' '}
                      </p>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                        fuga.
                      </p>
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
                        How To Become Succes in Designing &amp; Development?
                      </a>
                    </h6>
                  </div>
                  <div
                    id='collapseFour'
                    aria-labelledby='headingFour'
                    data-parent='#accordionExample'
                    className='collapse'
                  >
                    <div className='card-body pl-3 pr-3 pt-0'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.{' '}
                      </p>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                        fuga.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='clearfix' />
      {/* ============================ FAQ End ================================== */}
    </div>
  );
};
