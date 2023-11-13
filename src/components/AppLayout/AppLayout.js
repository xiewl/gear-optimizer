import React from 'react';
import CookieBanner from 'react-cookie-banner';
import { HashRouter as Router, NavLink, Route, useParams } from 'react-router-dom';
import ReactGA from 'react-ga';

import './AppLayout.css';

import Optimizer from '../Content/Optimizer';
import Augment from '../Content/Augment';
import NGUComponent from '../Content/NGUs';
import HackComponent from '../Content/Hacks';
import WishComponent from '../Content/Wishes';
import AboutComponent from '../About/About';

import DarkModeContext from './DarkModeContext';

function HowTo() {
    ReactGA.pageview('/howto');
    return <div className='howto'>
        <ol>
            {'How to use the gear optimizer:'}
        </ol>
        <ol>
            <li>Perform the global item setup based on game progress.
                <ul>
                    <li>Select your highest zone.</li>
                    <li>If applicable, select the highest version of your highest titan.</li>
                    <li>Select your highest looty version.</li>
                    <li>Select your highest ascended pendant version.</li>
                    <li>Select your number of accessory slots.</li>
                </ul>
                <br />
            </li>
            <li>Perform additional custom item configuration in the item list on the right.
                <ul>
                    <li>Open/close a particular zone's item list by clicking the zone name.</li>
                    <li>Right click an item in the list to open the item editing menu.</li>
                    <li>In the item editing menu enable or disable the item, or change its level.</li>
                    <li>Equip an item from the list by clicking it.</li>
                    <li>Equipped items can be locked by right clicking it in the equipped item list on the left.</li>
                </ul>
                <br />
            </li>
            <li>Handy shortcuts:
                <ul>
                    <li>Shift-click an item: set the item level to 100 (or 0 if it already was 100).</li>
                    <li>Ctrl-click or Alt-click an item: toggle the item state between enabled and disabled.</li>
                    <li>Click a zone name: collapse or expand the item list of that zone.</li>
                    <li>Shift-click a zone name: toggle the item list compact-mode on or off. Compact mode places all
                        zone items in a single list, and hides all disabled items. Disabled items can still be found in
                        the disabled items list at the bottom left of the page.
                    </li>
                    <li>Ctrl-click or Alt-click a zone name: toggle the state of all items in that zone between enabled
                        and disabled.
                    </li>
                </ul>
                <br />
            </li>
            <li>Configure base Power / Toughness, Infinity Cube, and hard cap information.
                <ul>
                    <li>Base and cube PT are straightforward. Cube tier is automatically calculated if you change the
                        cube PT, but can be adjusted manually.
                    </li>
                    <li>If you are nearing the hard cap for a specific value (e.g. EM cap), then the gear optimizer can
                        take this into account. Enter your nude total, i.e. total without any gear equipped, in the
                        appropriate field. To find this value, you can either unequip all your gear or do the math.
                    </li>
                </ul>
                <br />
            </li>
            <li>Select your priorities.
                <ul>
                    <li>Priorities are handled from top (Priority 1) to bottom.</li>
                    <li>When optimizing for a priority, the optimizer computes the optimal loadout for this priority,
                        for any remaining empty slots that were not used by previous priorities.
                    </li>
                    <li>The slots amount limits the number of additional accessory slots that can be used for this
                        priority.
                    </li>
                    <li>Of course, the global accessory slot limit always applies, it might be the case that no slots
                        remain for a priority lower down the list.
                    </li>
                </ul>
                <br />
            </li>
            <li>Click the "Optimize Gear" button to compute an optimal loadout based on the configuration.</li>
            <br />
            <li>Save and compare loadouts.
                <ul>
                    <li>The stats list shows the stats of the current loadout and the difference with the currently
                        selected save slot.
                    </li>
                    <li>The default save slot is empty. Overwriting the last save slot creates a new empty save at the
                        next save index.
                    </li>
                    <li>Saving / load / delete save slots by clicking the appropriate buttons. Navigate saves by
                        incrementing / decrementing the save index.
                    </li>
                    <li>Deleting a slot results in the removal of that save, all saves with a higher index have their
                        index decremented by 1.
                    </li>
                    <li>The current saved loadout can be shown or hidden by clicking the Show / Hide button.</li>
                </ul>
            </li>
        </ol>
        <br />
        <ol>
            {'How to use the augments calculator:'}
        </ol>
        <ol>
            <li>Fill in the fields and then check which augment gives the best boost.</li>
            <li>Augment speed is whatever you find in the breakdown, but divide by 100 to remove the "%"-sign.</li>
            <li>Time is in minutes.</li>
            <li>Ratio is the energy in augment : energy in upgrade, where the latter is always 1. If you want for
                example 3.4:2, then enter 1.7.
            </li>
        </ol>
        <br />
        <ol>
            {'How to use the NGUs calculator:'}
        </ol>
        <ol>
            <li>Fill in the fields and then check which NGU gives the best boost.</li>
            <li>NGU speed is whatever you find in the breakdown, but divide by 100 to remove the "%"-sign.</li>
            <li>Time is in minutes.</li>
            <li>Keep in mind that the calculator assumes you assign all your E or M to a single NGU.</li>
        </ol>
        <br />
        <ol>
            {'How to use the hacks calculator:'}
        </ol>
        <ol>
            <li>Fill in the fields and then choose one of the three options (target, max level, max MS).</li>
            <li>MS means milestone. MS reducers is how much you have lowered the number of levels between milestones.
                E.g. if the default levels per milestone is 10, but it's 8 for you, then you fill in 2.
            </li>
            <li>Hack speed is whatever you find in the breakdown, but divide by 100 to remove the "%"-sign.</li>
            <li>Time is in minutes.</li>
            <li>Min total time assumes you run Hack Hack first. Max total time assumes you run Hack Hack last, this is a
                sum of the times in the 'Time' column, which are based on current hack speed.
            </li>
        </ol>
        <br />
        <ol>
            {'How to use the wishes calculator:'}
        </ol>
        <ol>
            <li>Provide the required data in all input fields, please consider scientific notation, e.g. 1e6 instead of
                1000000, or have fun counting zeroes.
            </li>
            <li>Power is total power, cap is amount you actually want to spend on wishes.</li>
            <li>For example: if you value hacks and wishes equally, then you could set R3 cap to 22.44% of your total R3
                cap.
            </li>
            <li>Take the wish speed modifier from the breakdown menu and write it as a decimal, i.e. "100%" becomes
                "1.00".
            </li>
            <li>Minimal wish time, is the time you want the final level to take.</li>
            <li>Select some wishes, start levels, and target levels.</li>
            <li>Decide the order in which resources should be spent.</li>
            <li>A possible allocation of EMR cap will be suggested to reach the target level in each of these wishes in
                (close to) the shortest possible time. This procedure is stochastic, so reruns might result in
                (slightly) different values.
            </li>
        </ol>
        <br />
        <ol>
            {'How to use the advanced modifiers:'}
        </ol>
        <ol>
            <li>You don't have to use these modifiers, but they can make your life a little easier.</li>
            <li>You can for example save, equip your dedicated gear, drink your potions, and then copy
                power/cap/speed/... values into their respective fields to get an accurate calculation, then reload so
                you didn't waste your potions or resource assignments.
            </li>
            <li>With advanced modfiers, you enter all these values based on what you are currently wearing, and based on
                your current active potions.
            </li>
            <li>The advanced modifier fields are then used to calculate your ngu/hack/wish/... speed based on the values
                you entered, and changes in gear and pots between your current run and the run you are planning.
            </li>
            <br />
            <li>Current [something]: refers to the [something] you were using while you filled the power/cap/speed/...
                fields.
            </li>
            <li>Dedicated [something]: refers to the [something] you will be using in your ngu/hack/wish/... run.</li>
        </ol>
        <br />
        <ol>
            {'Multiplicative modifiers:'}
        </ol>
        <ol>
            <li>In the stat breakdown in the game these are given as percentages.</li>
            <li>The various optimizers instead expect raw decimal numbers.</li>
            <li>For example, a 1.2e34% multiplier should be entered as 1.2e32.</li>
        </ol>
    </div>;
}


const AppLayout = props => {
    const [darkMode, setDarkMode] = React.useState(() => localStorage.getItem('dark-mode') === true.toString());
    const toggleDarkMode = () => {
        localStorage.setItem('dark-mode', !darkMode)
        setDarkMode(v => !v);
    };
    let className = 'app_container';
    if (darkMode) {
        className += ' dark-mode';
    }
    return (
        <div className={className}>
            <CookieBanner styles={{
                banner: {
                    height: 'auto'
                },
                message: {
                    fontWeight: 400
                }
            }}
                message='This page wants to use local storage and a cookie to respectively keep track of your configuration and consent. Scroll or click to accept.'
            />
            <DarkModeContext.Provider value={darkMode}>
                <Router>
                    <div>
                        <nav>
                            <ul className='nav-bar-list'>
                                <li className='nav-bar-item'>
                                    <NavLink to='/' exact={true} className='nav-link' activeClassName='active'>计算器</NavLink>
                                </li>
                                <li className='nav-bar-item'>
                                    <NavLink to='/augment' exact={true} className='nav-link'
                                        activeClassName='active'>挂件</NavLink>
                                </li>
                                <li className='nav-bar-item'>
                                    <NavLink to='/ngus' exact={true} className='nav-link' activeClassName='active'>NGUs</NavLink>
                                </li>
                                <li className='nav-bar-item'>
                                    <NavLink to='/hacks' exact={true} className='nav-link' activeClassName='active'>Hacks</NavLink>
                                </li>
                                <li className='nav-bar-item'>
                                    <NavLink to='/wishes' exact={true} className='nav-link'
                                        activeClassName='active'>Wishes</NavLink>
                                </li>
                                <li className='nav-bar-item'>
                                    <NavLink to='/howto' exact={true} className='nav-link' activeClassName='active'>How to</NavLink>
                                </li>
                                <div className="nav-bar-item-separator"></div>
                                <li className='nav-bar-item'>
                                    <div className="nav-link" style={{ cursor: 'pointer', userSelect: 'none' }} onClick={toggleDarkMode}>
                                        Dark Mode
                                    </div>
                                </li>
                                <li className='nav-bar-item'>
                                    <NavLink to='/about/' exact={true} className='nav-link' activeClassName='active'>About</NavLink>
                                </li>
                            </ul>
                        </nav>

                        <Route exact={true} path='/'
                            render={(routeProps) => (<Optimizer {...routeProps} {...props} className='app_body' />)} />
                        <Route exact={true} path='/loadout/'
                            render={(routeProps) => (<Optimizer {...routeProps} {...props} className='app_body' />)} />
                        <Route exact={true} path='/loadout/:itemlist' children={<Loadout {
                            ...props
                        } />} />
                        <Route exact={true} path='/howto/' component={HowTo} />
                        <Route exact={true} path='/augment/'
                            render={(routeProps) => (<Augment {...routeProps} {...props} className='app_body' />)} />
                        <Route exact={true} path='/ngus/'
                            render={(routeProps) => (<NGUComponent {...routeProps} {...props} className='app_body' />)} />
                        <Route exact={true} path='/hacks/'
                            render={(routeProps) => (<HackComponent {...routeProps} {...props} className='app_body' />)} />
                        <Route exact={true} path='/wishes/'
                            render={(routeProps) => (<WishComponent {...routeProps} {...props} className='app_body' />)} />
                        <Route exact={true} path='/about/'
                            render={(routeProps) => (<AboutComponent {...routeProps} {...props} className='app_body' />)} />
                    </div>
                </Router>
            </DarkModeContext.Provider>
        </div>
    )
};

const Loadout = (props) => {
    let { itemlist } = useParams();
    itemlist = itemlist.split('&');
    return <Optimizer {...props} loadLoadout={itemlist} className='app_body' />;
}

export default AppLayout;
