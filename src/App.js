import myPlugin from '../modules/basicPlugin.js';

var editor = grapesjs.init({
  showOffsets: 1,
  showDevices: true,
  noticeOnUnload: 0,
  container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: { autoload: 0 },
  // selectorManager: { componentFirst: true, escapeName },
  plugins: [myPlugin],

  panels: {
    defaults: [
      {
        id: 'commands',
        buttons: [{}],
      },
      {
        id: 'options',
        buttons: [
          {
            id: 'save',
            className: 'fa fa-save',
            attributes: { title: 'Save' },
            command: 'saveTemplate',
          },
          {
            id: 'home',
            className: 'fa fa-home',
            attributes: { title: 'Home' },
          },
        ],
      },
      {
        id: 'views',
        buttons: [
          {
            id: 'open-style-manager',
            className: 'fa fa-paint-brush',
            command: 'open-sm',
            active: true,
          },
          {
            id: 'open-block-manager',
            className: 'fa fa-edit',
            command: 'open-blocks',
          },
        ],
      },
    ],
  },
  commands: {
    defaults: [
      {
        id: 'saveTemplate',
        run: function (editor, senderBtn) {
          alert('Save Template!');
          senderBtn.set('active', false);
        },
        stop: function (editor, senderBtn) {},
      },
    ],
  },

  styleManager: {
    sectors: [
      {
        name: 'General',
        open: false,
        buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
      },
      {
        name: 'Flex',
        open: false,
        buildProps: [
          'flex-direction',
          'flex-wrap',
          'justify-content',
          'align-items',
          'align-content',
          'order',
          'flex-basis',
          'flex-grow',
          'flex-shrink',
          'align-self',
        ],
      },
      {
        name: 'Dimension',
        open: false,
        buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
      },
      {
        name: 'Typography',
        open: false,
        buildProps: [
          'font-family',
          'font-size',
          'font-weight',
          'letter-spacing',
          'color',
          'line-height',
          'text-shadow',
        ],
      },
      {
        name: 'Decorations',
        open: false,
        buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
      },
      {
        name: 'Extra',
        open: false,
        buildProps: ['transition', 'perspective', 'transform'],
      },
    ],
  },
});

editor.BlockManager.add('h1-block', {
  label: 'Heading',
  content: '<h1>Put your title here</h1>',
  category: 'Basic',
  attributes: {
    title: 'Insert h1 block',
  },
});

var pn = editor.Panels;
pn.addButton('options', {
  id: 'open-deploy',
  className: 'fa fa-rocket',
  command: function () {
    console.log('Rocket pressed');
  },
});
