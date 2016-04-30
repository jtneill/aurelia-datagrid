const bootstrapCssFramework = {
  name: 'bootstrap',
  buttonClass: 'btn btn-default',
  checkboxClasses: {
    checkedIcon: 'fa fa-check',
    container: 'text-center',
    editInput: 'checkbox',
    uncheckedIcon: 'fa fa-times'
  },
  editClasses: {
    buttonGroup: 'btn-group',
    cancelButton: 'btn btn-danger',
    editButton: 'btn btn-primary',
    orDiv: '',
    saveButton: 'btn btn-success',
    saveCancelButtonGroup: 'btn-group-vertical'
  },
  gridClasses: {
    filterCheckboxButton: 'btn btn-default',
    filterCheckboxClearIcon: 'glyphicon glyphicon-ban-circle',
    filterCheckboxCheckedIcon: 'glyphicon glyphicon-ok',
    filterCheckboxFormFieldGroup: 'text-center',
    filterCheckboxGroup: 'btn-group',
    filterCheckboxUncheckedIcon: 'glyphicon glyphicon-remove',
    filterForm: '',
    filterFormField: '',
    filterInputGroup: 'input-group',
    filterInput: 'form-control',
    filterSearchIcon: 'fa fa-search',
    sortAscendingIcon: 'glyphicon glyphicon-arrow-up',
    sortAvailableIcon: 'glyphicon glyphicon-sort',
    sortButtonGroup: 'btn-group btn-group-justified',
    sortButton: 'btn btn-default',
    sortDescendingIcon: 'glyphicon glyphicon-arrow-down',
    table: 'table table-striped table-condensed table-bordered',
    tableSelectable: 'table-hover'
  },
  textClasses: {
    editForm: '',
    editField: 'form-group',
    editInput: 'form-control'
  },

  getAlignmentClass(alignment) {
    alignment = alignment.toLowerCase();

    switch (alignment) {
    case 'right':
    case 'right aligned':
      return 'text-right';

    case 'center':
    case 'center aligned':
      return 'text-center';

    case 'justify':
    case 'justified':
      return 'text-justify';

    default:
      return 'text-left';
    }
  }
};

export default bootstrapCssFramework;
