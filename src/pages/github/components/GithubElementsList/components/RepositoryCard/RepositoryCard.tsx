import React from 'react';
import { Repository } from '../../../../../../redux/github/actions';
import { Icon } from '../../../../../../components/icons';
import Card from '../../../../../../components/atoms/Card';
import withStyle from './withStyle';

interface UserProps {
  repository?: Repository;
  className?: string;
}

const RepositoryCard: React.FunctionComponent<UserProps> = ({ repository, className }) => {
  console.log(repository);
  return (
    <div className={className}>
      <Card>
        <div className='repository-title'>
          <a className='link' rel='noreferrer' href={repository?.htmlUrl} target='_blank'>
            <Icon name='Folder' />
          </a>
          <a rel='noreferrer' href={repository?.owner?.htmlUrl} target='_blank'>
            <Icon name='GitHub' />
          </a>
        </div>
        <div className='repository-body'>
          <h4 className='title'>{repository?.name}</h4>
          <div className='details'>
            {repository?.createdAt && (
              <p>
                <em>Author : </em>
                {repository?.owner.login}
              </p>
            )}

            {repository?.description && (
              <p className='description'>
                <em>Description : </em>
                {repository?.description}
              </p>
            )}
            {repository?.createdAt && (
              <p>
                <em>Created at : </em>
                {repository?.createdAt}
              </p>
            )}
          </div>
        </div>
        <ul className='repository-footer'>
          <a className='link' href={repository?.languagesUrl} target='_blank' rel='noreferrer'>
            <li>
              <em>{repository?.language ?? 'Unknown'}</em>
            </li>
          </a>

          <a className='link' href={repository?.stargazersUrl} target='_blank' rel='noreferrer'>
            <li className='stars'>{repository?.stargazersCount}</li>
          </a>

          <a className='link' href={repository?.issuesUrl} target='_blank' rel='noreferrer'>
            <li className='issues'>{repository?.openIssues}</li>
          </a>
        </ul>
      </Card>
    </div>
  );
};

export default withStyle(RepositoryCard);
