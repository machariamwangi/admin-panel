import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class Menu extends Component{
     render(){
         return(
             <div>
                   <div class="main-sidebar sidebar-dark-primary elevation-4">
    {/* <!-- Brand Logo --> */}
    <Link to ="index3.html" class="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
         />
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </Link>

    {/* <!-- Sidebar --> */}
    <div class="sidebar">
      {/* <!-- Sidebar user panel (optional) --> */}
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
         <img src="#" class="img-circle elevation-2" alt="UserImage" />
        </div>
        <div class="info">
          <Link to ="#" class="d-block">StorageKE</Link>
        </div>
      </div>

      {/* <!-- Sidebar Menu --> */}
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library --> */}
          <li class="nav-item has-treeview menu-open">
            <Link to ="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
               Our storages
                <i class="right fas fa-angle-left"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to ="./index.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Microsoft Azure</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="./index2.html" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Amazon AWS</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="./index3.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Google cloud</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <Link to ="pages/widgets.html" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
              DigtialOcean
                <span class="right badge badge-danger">New</span>
              </p>
            </Link>
          </li>
          <li class="nav-item has-treeview">
            <Link to ="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
              Alibaba Cloud
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">6</span>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to ="pages/layout/top-nav.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Top Navigation</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/layout/boxed.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Boxed</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/layout/fixed-sidebar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Sidebar</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/layout/fixed-topnav.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Navbar</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/layout/fixed-footer.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Footer</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/layout/collapsed-sidebar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Collapsed Sidebar</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <Link to ="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
              LiquidWeb
                <i class="right fas fa-angle-left"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to ="pages/charts/chartjs.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ChartJS</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/charts/flot.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Flot</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/charts/inline.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inline</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <Link to ="#" class="nav-link">
              <i class="nav-icon fas fa-tree"></i>
              <p>
              Rackspace.
                <i class="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to ="pages/UI/general.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>General</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/UI/icons.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Icons</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/UI/buttons.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Buttons</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/UI/sliders.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sliders</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/UI/modals.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Modals and Alerts</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/UI/navbar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Navbar and Tabs</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/UI/timeline.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Timeline</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/UI/ribbons.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Ribbons</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <Link to ="#" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>
              MassiveGrid.
                <i class="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to ="pages/forms/general.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>General Elements</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="pages/forms/advanced.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Advanced Elements</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/forms/editors.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Editors</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <Link to="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
              Kamatera
                <i class="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to="pages/tables/simple.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Simple Tables</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/tables/data.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>DataTables</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/tables/jsgrid.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>jsGrid</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-header">EXAMPLES</li>
          <li class="nav-item">
            <Link to="pages/calendar.html" class="nav-link">
              <i class="nav-icon fas fa-calendar-alt"></i>
              <p>
                Calendar
                <span class="badge badge-info right">2</span>
              </p>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="pages/gallery.html" class="nav-link">
              <i class="nav-icon far fa-image"></i>
              <p>
                Gallery
              </p>
            </Link>
          </li>
          <li class="nav-item has-treeview">
            <Link to="#" class="nav-link">
              <i class="nav-icon far fa-envelope"></i>
              <p>
                Mailbox
                <i class="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to="pages/mailbox/mailbox.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inbox</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/mailbox/compose.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Compose</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/mailbox/read-mail.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Read</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <Link to="#" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>
                Pages
                <i class="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to="pages/examples/invoice.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Invoice</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/profile.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Profile</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/e_commerce.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>E-commerce</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/projects.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Projects</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/project_add.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Project Add</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/project_edit.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Project Edit</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/project_detail.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Project Detail</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/contacts.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <Link to="#" class="nav-link">
              <i class="nav-icon far fa-plus-square"></i>
              <p>
                Extras
                <i class="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to="pages/examples/login.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Login</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/register.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Register</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/forgot-password.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Forgot Password</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/recover-password.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Recover Password</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/lockscreen.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Lockscreen</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/legacy-user-menu.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Legacy User Menu</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/language-menu.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Language Menu</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/404.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Error 404</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/500.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Error 500</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/pace.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Pace</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="pages/examples/blank.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Blank Page</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="starter.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Starter Page</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-header">MISCELLANEOUS</li>
          <li class="nav-item">
            <Link to="https://adminlte.io/docs/3.0" class="nav-link">
              <i class="nav-icon fas fa-file"></i>
              <p>Documentation</p>
            </Link>
          </li>
          <li class="nav-header">MULTI LEVEL EXAMPLE</li>
          <li class="nav-item">
            <Link to="#" class="nav-link">
              <i class="fas fa-circle nav-icon"></i>
              <p>Level 1</p>
            </Link>
          </li>
          <li class="nav-item has-treeview">
            <Link to="#" class="nav-link">
              <i class="nav-icon fas fa-circle"></i>
              <p>
                Level 1
                <i class="right fas fa-angle-left"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Level 2</p>
                </Link>
              </li>
              <li class="nav-item has-treeview">
                <Link to="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>
                    Level 2
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </Link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="#" class="nav-link">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Level 3</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="#" class="nav-link">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Level 3</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="#" class="nav-link">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Level 3</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link to="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Level 2</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <Link to="#" class="nav-link">
              <i class="fas fa-circle nav-icon"></i>
              <p>Level 1</p>
            </Link>
          </li>
          <li class="nav-header">LABELS</li>
          <li class="nav-item">
            <Link to="#" class="nav-link">
              <i class="nav-icon far fa-circle text-danger"></i>
              <p class="text">Important</p>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="#" class="nav-link">
              <i class="nav-icon far fa-circle text-warning"></i>
              <p>Warning</p>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="#" class="nav-link">
              <i class="nav-icon far fa-circle text-info"></i>
              <p>Informational</p>
            </Link>
          </li>
        </ul>
      </nav>
      {/* <!-- /.sidebar-menu --> */}
    </div>
    {/* <!-- /.sidebar --> */}
  </div>
             </div>
         )
     }
 }
  export default Menu;