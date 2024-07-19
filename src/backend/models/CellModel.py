from django.db import models
from django.utils.translation import gettext_lazy as _

class Cell(models.Model):
    grid = models.ForeignKey('GridModel', on_delete=models.CASCADE, related_name='cells')
    row = models.IntegerField(_('row'))
    column = models.IntegerField(_('column'))
    value = models.CharField(_('value'), max_length=255)
    created_at = models.DateTimeField(_('created at'), auto_now_add=True)
    updated_at = models.DateTimeField(_('updated at'), auto_now=True)

    def __str__(self):
        return f"Cell ({self.row}, {self.column}) in Grid {self.grid.name}"

    class Meta:
        verbose_name = _('cell')
        verbose_name_plural = _('cells')
        unique_together = ('grid', 'row', 'column')
