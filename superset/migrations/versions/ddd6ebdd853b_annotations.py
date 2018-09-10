# -*- coding: utf-8 -*-
"""
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
"""
"""annotations

Revision ID: ddd6ebdd853b
Revises: ca69c70ec99b
Create Date: 2017-09-13 16:36:39.144489

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = 'ddd6ebdd853b'
down_revision = 'ca69c70ec99b'


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        'annotation_layer',
        sa.Column('created_on', sa.DateTime(), nullable=True),
        sa.Column('changed_on', sa.DateTime(), nullable=True),
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(length=250), nullable=True),
        sa.Column('descr', sa.Text(), nullable=True),
        sa.Column('changed_by_fk', sa.Integer(), nullable=True),
        sa.Column('created_by_fk', sa.Integer(), nullable=True),
        sa.ForeignKeyConstraint(['changed_by_fk'], ['ab_user.id'], ),
        sa.ForeignKeyConstraint(['created_by_fk'], ['ab_user.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_table(
        'annotation',
        sa.Column('created_on', sa.DateTime(), nullable=True),
        sa.Column('changed_on', sa.DateTime(), nullable=True),
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('start_dttm', sa.DateTime(), nullable=True),
        sa.Column('end_dttm', sa.DateTime(), nullable=True),
        sa.Column('layer_id', sa.Integer(), nullable=True),
        sa.Column('short_descr', sa.String(length=500), nullable=True),
        sa.Column('long_descr', sa.Text(), nullable=True),
        sa.Column('changed_by_fk', sa.Integer(), nullable=True),
        sa.Column('created_by_fk', sa.Integer(), nullable=True),
        sa.ForeignKeyConstraint(['changed_by_fk'], ['ab_user.id'], ),
        sa.ForeignKeyConstraint(['created_by_fk'], ['ab_user.id'], ),
        sa.ForeignKeyConstraint(['layer_id'], ['annotation_layer.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(
        'ti_dag_state',
        'annotation', ['layer_id', 'start_dttm', 'end_dttm'], unique=False)


def downgrade():
    op.drop_index('ti_dag_state', table_name='annotation')
    op.drop_table('annotation')
    op.drop_table('annotation_layer')
