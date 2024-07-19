from django.db import models
from django.utils.translation import gettext_lazy as _

class Grid(models.Model):
    name = models.CharField(_('name'), max_length=255)
    description = models.TextField(_('description'))
    created_at = models.DateTimeField(_('created at'), auto_now_add=True)
    updated_at = models.DateTimeField(_('updated at'), auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('grid')
        verbose_name_plural = _('grids')
