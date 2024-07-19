from django.db import models
from django.utils.translation import gettext_lazy as _

class NexusGrid(models.Model):
    nexus = models.ForeignKey('NexusModel', on_delete=models.CASCADE, related_name='nexus_grids')
    grid = models.ForeignKey('GridModel', on_delete=models.CASCADE, related_name='nexus_grids')
    created_at = models.DateTimeField(_('created at'), auto_now_add=True)
    updated_at = models.DateTimeField(_('updated at'), auto_now=True)

    def __str__(self):
        return f"Nexus {self.nexus.name} - Grid {self.grid.name}"

    class Meta:
        verbose_name = _('nexus grid')
        verbose_name_plural = _('nexus grids')
        unique_together = ('nexus', 'grid')
