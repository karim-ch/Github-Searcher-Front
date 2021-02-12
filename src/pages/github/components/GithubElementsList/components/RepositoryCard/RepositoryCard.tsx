import React from 'react';
import { Repository } from '@redux/github/actions';
import { Icon } from '@components/icons';
import Card from '@components/molecules/Card';
import withStyle from './withStyle';

interface UserProps {
  repository?: Repository;
  className?: string;
}

const RepositoryCard: React.FunctionComponent<UserProps> = ({ repository, className }) => {
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
            <p>
              <Icon name='Github' />
              <em>Author : </em>
              {repository?.owner?.login}
            </p>

            <p className='description'>
              <Icon name='Pen' />
              <em>Description : </em>
              {repository?.description ?? 'none'}
            </p>

            <p>
              <Icon name='Language' />
              <em>Language : </em>
              {repository?.language ?? 'Unknown'}
            </p>

            <p>
              <Icon name='Star' />
              <em>Stargazers : </em>
              {repository?.stargazersCount ?? 0}
            </p>

            <p>
              <Icon name='Issue' />
              <em>Open Issues : </em>
              {repository?.openIssues ?? 0}
            </p>

            <p>
              <Icon name='Checked' />
              <em>Created at : </em>
              {new Date(repository?.createdAt ?? '').toDateString()}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default withStyle(RepositoryCard);
