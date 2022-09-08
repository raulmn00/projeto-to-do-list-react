import './TaskList.css';
import { Tasks } from '../../mocks/Tasks.js';
import React, { useEffect, useState } from 'react';
import { TaskItem } from '../TaskItem/TaskItem';

//componente taskListItem
export function TaskList({
    statusTaskList,
    setMainContent,
    tasks,
    mainContent,
    control,
}) {
    return (
        <>
            <TaskItem
                tasks={tasks}
                mainContent={mainContent}
                control={control}
                statusTaskList={statusTaskList}
                setMainContent={setMainContent}
            />
        </>
    );
}
